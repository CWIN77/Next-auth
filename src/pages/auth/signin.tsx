import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react"
import { GetServerSideProps } from "next";
export default function SignIn({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null }) {
  return (
    <>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}