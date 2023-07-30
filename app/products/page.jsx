import Layout from "../components/Layout"
import Link from "next/link"
const page = () => {
  return (
    <Layout>
        <Link className="bg-blue-800 text-white p-2 rounded-lg" href={'/products/new'}>Add new Products</Link>
    </Layout>
  )
}

export default page
