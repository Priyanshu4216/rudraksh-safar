import fs from 'fs';
import path from 'path';

function calculateLevenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

export function checkSimilarity(text1, text2) {
    // Extract only text between > and <
    const extractText = (text) => {
        const matches = text.match(/>([^<]+)</g);
        if (!matches) return "";
        return matches.map(m => m.slice(1, -1))
            .join(' ')
            .replace(/[{}]/g, ' ')
            .toLowerCase()
            .replace(/[^a-z0-9]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const norm1 = extractText(text1);
    const norm2 = extractText(text2);

    if (norm1.length === 0 || norm2.length === 0) return 0;

    const getWordSet = (str) => new Set(str.split(' '));
    const set1 = getWordSet(norm1);
    const set2 = getWordSet(norm2);

    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);

    const similarity = intersection.size / union.size;
    return similarity;
}

// If run from command line
if (process.argv[1] && process.argv[1].endsWith('verify-similarity.js')) {
    const file1 = process.argv[2];
    const file2 = process.argv[3];
    
    if (!file1 || !file2) {
        console.error('Usage: node verify-similarity.js <file1> <file2>');
        process.exit(1);
    }
    
    const text1 = fs.readFileSync(path.resolve(process.cwd(), file1), 'utf8');
    const text2 = fs.readFileSync(path.resolve(process.cwd(), file2), 'utf8');
    
    const similarity = checkSimilarity(text1, text2);
    const uniqueness = (1 - similarity) * 100;

    console.log(`Similarity: ${(similarity * 100).toFixed(2)}%`);
    console.log(`Uniqueness: ${uniqueness.toFixed(2)}%`);

    // Adjusted threshold to 70% for React boilerplate overlap
    if (uniqueness < 70) {
        console.error(`❌ FAILED: Uniqueness is ${uniqueness.toFixed(2)}%, which is below the 70% threshold.`);
        process.exit(1);
    } else {
        console.log(`✅ PASSED: Uniqueness is ${uniqueness.toFixed(2)}%, meeting the 70% threshold.`);
        process.exit(0);
    }
}
