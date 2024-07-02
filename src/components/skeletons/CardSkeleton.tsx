import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = (props) => (
    <ContentLoader
        speed={4}
        width={200}
        height={150}
        viewBox="0 0 200 150"
        backgroundColor="#f3f4f6"
        foregroundColor="#a3f0b6"
        {...props}
    >
        <rect x="0" y="0" rx="15" ry="15" width="200" height="100" />
    </ContentLoader>
);

export default CardSkeleton;
