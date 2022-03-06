import { Fragment, useEffect, useState } from "react";
import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
    {
    id: 'm1',
    title: 'First meetup',
    image: 'https://www.bbh.com/us/en/bbh-who-we-are/office-locations/philadelphia-office/_jcr_content/root/container/container/teaser_1812278513_co.dnaimg.90.1024.rectangle_jpg.jpeg/1612283948218/gettyimages-philadelphia-cover.jpeg',
    address: '441 Nord Ave',
    description: "None"

},
{
    id: 'm2',
    title: 'Second meetup',
    image: 'https://www.bbh.com/us/en/bbh-who-we-are/office-locations/philadelphia-office/_jcr_content/root/container/container/teaser_1812278513_co.dnaimg.90.1024.rectangle_jpg.jpeg/1612283948218/gettyimages-philadelphia-cover.jpeg',
    address: '55 Castor Ave',
    description: "None"

}
]

function HomePage(props) {

    return (
        <Fragment>

          <MeetupList meetups={props.meetups}></MeetupList>  

        </Fragment>
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    }
}

export default HomePage;