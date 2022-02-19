import Image from 'next/image'
import pet1 from '../public/pets/pet1.jpg'

function Pets() {
  return (
    <div>
      <Image src={pet1} placeholder='blur' alt='pet' width='280' height='460'/>
      {
        ['1','2','3','4','5'].map((i) => {
          return (
            <div key={i}>
              <Image src={`/pets/pet${i}.jpg`} alt='pet' width='280' height='460'/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Pets