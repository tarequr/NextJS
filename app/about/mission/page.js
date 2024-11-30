import Button from "@/app/components/Button";
import Image from "next/image";
import cat from "@/public/images/cat.jpg"

function Mission() {
  return (
    <main>
      <div>This is the mission page</div>
      <Image src={cat} alt="Cat Image" placeholder="blur" />
      <Button/>
    </main>
  )
}

export default Mission