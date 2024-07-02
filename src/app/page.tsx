import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <div className="text-center">
        <div className="relative dark:drop-shadow-md dark:invert inline-block">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <hr className="w-1/2 my-4 border-t-2 border-gray-300" />
        <div className="flex justify-center">
          <Link href="/home" passHref>
            Carousel component
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
