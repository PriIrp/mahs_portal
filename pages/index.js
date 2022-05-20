import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
  <div className='home'>

    <Head>
      <title> McNair Prototype</title>
    </Head>

    <div className='mainTitle'>
      <h1>McNair Student Portal</h1>
      {/* <Image id = 'cougar_img'
        src="/public/cougar.png"
        height={72}
        width={72} 
        alt="McNair Cougar"/> */}
    </div>

    <div className='wrapper'>
      <div className="gpa container">
        <Link href="posts/GPA_Calc">
          <a>
            <div>
                <h2> GPA Calculator</h2>

                <p>Calculate your weighted or unweighted cumulative GPA.</p>

              <button className='btn'>Calculate</button>
              
            </div>
          </a>
        </Link>
      </div>

      <div className="calendar container">
        <Link href="posts/GPA_Calc">
          <a>
            <div>
                <h2> McNair Calendar</h2>
                <p>Scan the McNair school calendar to know of which day it is and upcoming school events</p>

              <button className='btn'>Calendar</button>
              
            </div>
          </a>
        </Link>
      </div>

      <div className="organizer container">
        <Link href="posts/GPA_Calc">
          <a>
            <div>
                <h2> Work Organizer</h2>
                <p>List, order, and check off your work in this intuitive to-do list</p>

              <button className='btn'>Check TO-DO</button>
              
            </div>
          </a>
        </Link>
      </div>
    </div>

    <footer>
        Priyansh Patel Class of '23
    </footer>

  </div>
  )
}
