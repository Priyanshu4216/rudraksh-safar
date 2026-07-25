import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaProps {
  schema: object | object[];
}

const DynamicSchema: React.FC<SchemaProps> = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default DynamicSchema;
