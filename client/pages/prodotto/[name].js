import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { name } = router.query; // Destructuring our router object

    return (
      <div>
        <h1>Product page</h1>
        {name}
      </div>
    )
  }
export default Product
  