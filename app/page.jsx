import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  // console.log(user);
  return (
    <div className="flex justify-center items-center h-100vh">
      
      <p className="text-3xl">Home</p>

    </div>
  );
}
