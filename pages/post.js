import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: "80vw" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        aliquam at et pariatur obcaecati, repellat rem excepturi doloribus nisi
        omnis cum? Esse eaque laudantium minima? Provident expedita ipsum
        voluptas saepe.
      </p>
    </Layout>
  );
};

export default withRouter(Post);
