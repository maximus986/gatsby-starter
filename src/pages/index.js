/** @jsx jsx */
import { jsx } from 'theme-ui';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const IndexPage = () => {
  const {
    siteMetadata: { title },
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO title={title} />
    </Layout>
  );
};

export default IndexPage;
