import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails(props) {
  return (
    <MeetupDetail image={props.meetupData.image}
    title={"First Meetup"}
    address="2211 vista street"
    description="No des" 
    />
  )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1'
            }}
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                image:"https://www.bbh.com/us/en/bbh-who-we-are/office-locations/philadelphia-office/_jcr_content/root/container/container/teaser_1812278513_co.dnaimg.90.1024.rectangle_jpg.jpeg/1612283948218/gettyimages-philadelphia-cover.jpeg" 
    ,title: "First Meetup"
    ,address:"2211 vista street"
    ,description:"No des" 
            }
            }
        }
    
    }
export default MeetupDetails