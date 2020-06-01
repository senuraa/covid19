import React from 'react';
import NavBar from 'components/organisms/NavBar';
import PageTemplate from 'components/templates/PageTemplate';

const HomePage = () => {
    return (
        <PageTemplate header={<NavBar />}>
            <div>Test Content</div>
        </PageTemplate>
    );
};

export default HomePage;
