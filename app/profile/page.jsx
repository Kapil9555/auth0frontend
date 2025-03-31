import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import ProfileClient from "./components/user-client";
import SendTokenButton from './components/SendTokenButton'

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center w-full mt-10 px-44">
      <div className="flex items-center w-full justify-center">
        <div>
          <h1 className="text-2xl mb-4">Client Component</h1>
          <ProfileClient />
        </div>
        
      </div>
      <div className="flex items-center w-full justify-center">
         <SendTokenButton />
      </div>
      
    </div>
  );
};

export default Profile;
