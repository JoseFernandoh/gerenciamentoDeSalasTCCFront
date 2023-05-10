import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/painel">
      <a>
        <img width={186} height={70} src={""} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
