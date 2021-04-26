import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>login</div>;
};

export default login;
