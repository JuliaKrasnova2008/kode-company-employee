import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Sciletons() {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={100}
            viewBox="0 0 400 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            padding={6}
        >
            <rect x="93" y="26" rx="3" ry="3" width="104" height="12" />
            <rect x="93" y="49" rx="3" ry="3" width="64" height="9" />
            <circle cx="39" cy="40" r="38" />
        </ContentLoader>
    )
}
