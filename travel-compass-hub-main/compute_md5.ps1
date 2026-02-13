param([string]$inputString)
$md5 = [System.Security.Cryptography.MD5]::Create()
$hash = [BitConverter]::ToString($md5.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($inputString)))
Write-Output $hash.Replace("-", "").ToLower()
