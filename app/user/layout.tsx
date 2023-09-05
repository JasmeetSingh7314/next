import { Metadata } from "next"
import styles from './styles.module.css'

export const metadata:Metadata={
    title:'Users'


}


export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
      <main >
        {children}
      </main>
    </>
  )
}
