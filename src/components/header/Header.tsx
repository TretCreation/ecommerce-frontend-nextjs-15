import Image from "next/image"

export function Header() {
  return (
    <>
      <Image src={"/logo.svg"} alt='logo' width={100} height={50} />
      <div>Searchbar</div>
      <div>Icons</div>
    </>
  )
}
