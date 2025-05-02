import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButton />
      <p className="pt-3">
        Hotel Staff? Log in through{" "}
        <a
          href="https://steven-suites-admin-site.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Admin Portal
        </a>
      </p>
    </div>
  );
}
