import React from 'react';
import Header from '../components/Header/Header'
import SectionTitle from '../components/SectionTitle';
import MovieRow from '../components/MovieRow/MovieRow';
import Footer from './Footer/Footer2';
import ImageSlider from '../components/VideoReel/ImageSlider';

const sliderImages = [
  { url: '/assets/Pictures/pic1.jpg'},
  { url: '/assets/Pictures/pic2.jpg'},
  { url: '/assets/Pictures/pic3.jpg'},
  { url: '/assets/Pictures/pic4.jpg'},
  { url: '/assets/Pictures/pic5.jpg'},
  { url: '/assets/Pictures/pic6.jpg'},
];


const trendingMovies = [
  { title: 'Fallout', poster: '/assets/Trending_Videos/Fallout.jpg' , duration: '1 hour 01 minute',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'Stree2', poster: '/assets/Trending_Videos/stree2.jpg' , duration: ' 2 hours 27 Minutes',
    language: 'Hindi , Tamil',
    year: '2024',},
  { title: 'Kill', poster: '/assets/Trending_Videos/kill.jpeg', duration: ' 1 hours 45 Minutes',
    language: 'Hindi',
    year: '2023', },
  { title: 'Maharaja', poster: '/assets/Trending_Videos/Maharaja.avif', duration: ' 2 hours 21 Minutes',
    language: 'Hindi , Tamil',
    year: '2024', },
  { title: 'Reacher', poster: '/assets/Trending_Videos/Reacher.jpg' , duration: ' 50 Minutes',
    language: 'Hindi, English',
    year: '2022', },
  { title: 'Sector 36', poster: '/assets/Trending_Videos/sector36.jpg' , duration: ' 2 hours 03 Minutes',
    language: 'Hindi, Tamil',
    year: '2024',},
  { title: 'Stranger Things', poster: '/assets/Trending_Videos/Stranger_Things.jpg' , duration: 'Episords 42',
    language: 'Hindi, English',
    year: '2016-25',},
  { title: 'Saints & Sinners', poster: '/assets/Trending_Videos/land.jpg' , duration: ' 1 hours 46 Minutes',
    language: 'Hindi, English',
    year: '2023',},
  { title: 'Taaza Khabar', poster: '/assets/Trending_Videos/Taaza_khabar.jpg' , duration: 'Episords 12',
    language: 'Hindi',
    year: '2023',},
  { title: 'The Rings', poster: '/assets/Trending_Videos/The rings.jpg' , duration: 'Episords 17',
    language: 'Hindi, English',
    year: '2022',},
  { title: 'Ulajh', poster: '/assets/Trending_Videos/ulajh.jpg' , duration: ' 2 hours 30 Minutes',
    language: 'Hindi',
    year: '2024',}

];

const mostPopular = [
  { title: '3 Idiots', poster: '/assets/Most_Popular/3 idiots.jpg' , duration: ' 2 hours 50 Minutes',
    language: 'Hindi',
    year: '2009',},
  { title: 'Dangal', poster: '/assets/Most_Popular/dangal.jpg' , duration: ' 2 hours 41 Minutes',
    language: 'Hindi',
    year: '2016',},
  { title: 'Deadpool Wolverine', poster: '/assets/Most_Popular/deadpool.jpg' , duration: ' 2 hours 08 Minutes',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'The Godfather', poster: '/assets/Most_Popular/godfather.jpg' , duration: ' 2 hours 55 Minutes',
    language: 'Hindi, English',
    year: '1972',},
  { title: 'Joker', poster: '/assets/Most_Popular/joker.jpg' , duration: ' 2 hours 18 Minutes',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'Planet of Apes', poster: '/assets/Most_Popular/Kingdom.jpg' , duration: ' 2 hours 25 Minutes',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'Maidan', poster: '/assets/Most_Popular/Maidaan.jpg' , duration: ' 3 hours 01 Minutes',
    language: 'Hindi',
    year: '2024',},
  { title: 'RRR', poster: '/assets/Most_Popular/RRR.jpg' , duration: ' 3 hours 07 Minutes',
    language: 'Hindi, Tamil',
    year: '2022',},
  { title: 'Shershaah', poster: '/assets/Most_Popular/Sher.jpg' , duration: ' 2 hours 15 Minutes',
    language: 'Hindi, Tamil',
    year: '2021',},
  { title: 'Venom', poster: '/assets/Most_Popular/Venom.jpg' , duration: ' 1 hours 49 Minutes',
    language: 'Hindi, English',
    year: '2024',}
];

const sports = [
  { title: 'Badminton', poster: '/assets/Sport_Videos/Badminton.webp' , duration: '  9 minutes of INSANE badminton points from #Paris2024 🏸🔥',
    language: 'Hindi, English',
    },
  { title: 'Bangal Warrior', poster: '/assets/Sport_Videos/Bangal Warriors.webp' , duration: '   #BengalWarriorz tied with #PuneriPaltan , #ProKabaddiOnStar',
    language: 'Hindi, English',},
  { title: 'F1 Race', poster: '/assets/Sport_Videos/F1 Race.webp' , duration: 'Race Highlights |',
    year : '2024 Mexico City Grand Prix.',
    language: 'Hindi, English',},
  { title: 'Imdia A vs Pak A', poster: '/assets/Sport_Videos/India A vs Pak A.webp' , duration: '#BengalWarriorz tied with #PuneriPaltan',
    year : '#ProKabaddiOnStar  , 2024 HIGHLIGHTS',
    language: 'Hindi, English', },
  { title: 'India vs Australia', poster: '/assets/Sport_Videos/India vs Aus.webp' , duration: 'Cricket World Cup 2023 Final:',
    year : 'Australia v India | Match Highlights',
    language: 'Hindi, English',},
  { title: 'LiverPool', poster: '/assets/Sport_Videos/Liverpool.webp' , duration: 'Extended Highlights:',
    year : ' FIVE Goals as Gakpo & Diaz Secure Quarter-Finals | Brighton 2-3 Liverpool',
    language: 'Hindi, English'},
  { title: 'NHL', poster: '/assets/Sport_Videos/NHL.webp'  , duration: ' NHL Highlights | ',
    year : 'Islanders vs. Sabres - November 1, 2024',
    language: 'Hindi, English'},
  { title: 'Real Madrid vs Dortmund', poster: '/assets/Sport_Videos/Real Madrid vs Dortmund.webp' , duration: ' Real Madrid vs Borussia Dortmund ',
    year : ' Key Moments | UEFA Champions League |',
    language: 'Hindi, English'}
];


const recommendedMovies= [
  { title: '12th Fail', poster: '/assets/Recommended/12th_fail.webp' , duration: '2 hour 27 minute',
    language: 'Hindi',
    year: '2023',},
  { title: '13 Hours', poster: '/assets/Recommended/13 hours.jpg' , duration: '2 hour 24 minute',
    language: 'English',
    year: '2016',},
  { title: 'Arrival', poster: '/assets/Recommended/Arrival.jpg' , duration: '1 hour 56 minute',
    language: 'Hindi, English',
    year: '2016',},
  { title: 'Batla House', poster: '/assets/Recommended/Batla House.jpg' , duration: '2 hour 26 minute',
    language: 'Hindi',
    year: '2019',},
  { title: 'Batman', poster: '/assets/Recommended/Batman.jpg' , duration: '2 hour 20 minute',
    language: 'English',
    year: '2005',},
  { title: 'Inception', poster: '/assets/Recommended/Inception.jpg' , duration: '2 hour 28 minute',
    language: 'English',
    year: '2010',},
  { title: 'Tumbbad', poster: '/assets/Recommended/Tumbbad.webp' , duration: '1 hour 44 minute',
    language: 'Hindi',
    year: '2018',},
  { title: 'Spectre', poster: '/assets/Recommended/spectre.jpg' , duration: '2 hour 25 minute',
    language: 'English',
    year: '2015',}
];

const webSeries = [
  { title: 'Dark', poster: '/assets/Web_Series/Dark.jpg' , duration: 'Episode 26',
    language: 'Hindi, English',
    year: '2017-20',},
  { title: 'Flames', poster: '/assets/Web_Series/Flames.jpg' , duration: 'Episodes 20',
    language: 'Hindi',
    year: '2018-23',},
  { title: 'GOT', poster: '/assets/Web_Series/GOT.jpg' , duration: 'Episodes 74',
    language: 'Hindi, English',
    year: '2011-19',},
  { title: 'Mirzapur', poster: '/assets/Web_Series/Mirzapur.jpg' , duration: 'Episodes 30',
    language: 'Hindi',
    year: '2018',},
  { title: 'Mumbai', poster: '/assets/Web_Series/Mumbai.jpg' , duration: 'Episode 16',
    language: 'Hindi',
    year: '2021-',},
  { title: 'Paatal', poster: '/assets/Web_Series/Paatal.jpg' , duration: 'Episodes 10',
    language: 'Hindi',
    year: '2020',},
  { title: 'Panchayat', poster: '/assets/Web_Series/Panchayat.webp' , duration: 'Episodes 24',
    language: 'Hindi',
    year: '2020',},
  { title: 'Terminal', poster: '/assets/Web_Series/Terminal.jpg' , duration: 'Episodes 9',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'The Boys', poster: '/assets/Web_Series/The boys.jpg' , duration: 'Episodes 40',
    language: 'Hindi, English',
    year: '2019',},
  { title: 'Walking Dead', poster: '/assets/Web_Series/Walking Dead.jpg' , duration: 'Episodes 177',
    language: 'Hindi, English',
    year: '2022',}
];

const actionMovies = [
  { title: 'Animal', poster: '/assets/Action_Movies/Animal.jpg' , duration: '3 hour 24 minute',
    language: 'Hindi',
    year: '2023',},
  { title: 'The Crow', poster: '/assets/Action_Movies/Crow.jpg' , duration: '1 hour 51 minute',
    language: ' English',
    year: '2024',},
  { title: 'Fast X', poster: '/assets/Action_Movies/Fast x.jpg' , duration: '2 hour 21 minute',
    language: 'Hindi, English',
    year: '2023',},
  { title: 'Jawan', poster: '/assets/Action_Movies/jawan.jpg' , duration: '2 hour 49 minute',
    language: 'Hindi',
    year: '2023',},
  { title: 'John Wick', poster: '/assets/Action_Movies/John Wick.jpg' , duration: '2 hour 49 minute',
    language: 'Hindi, English',
    year: '2023',},
  { title: 'Panda', poster: '/assets/Action_Movies/Panda.jpg' , duration: '1 hour 34 minute',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'Romulus', poster: '/assets/Action_Movies/Romulus.jpg' , duration: '1 hour 59 minute',
    language: 'Hindi, English',
    year: '2024',},
  { title: 'Shoot Out', poster: '/assets/Action_Movies/Shoot out.jpg' , duration: '2 hour 35 minute',
    language: 'Hindi',
    year: '2013',},
  { title: 'Singham', poster: '/assets/Action_Movies/Singham.jpg' , duration: '2 hour 23 minute',
    language: 'Hindi',
    year: '201',},
  { title: 'Twisters', poster: '/assets/Action_Movies/Twisters.jpg' , duration: '2 hour 02 minute',
    language: 'English',
    year: '2024',}
];

const mysteryMovie = [
  { title: 'Drishyam', poster: '/assets/Mystery&Thriller_Movies/Drishyam.jpg' , duration: '2 hour 43 minute',
    language: 'Hindi',
    year: '2015',},
  { title: 'Hypnotic', poster: '/assets/Mystery&Thriller_Movies/Hypnotic.jpg' , duration: '1 hour 33 minute',
    language: 'English',
    year: '2023',},
  { title: 'Jailer', poster: '/assets/Mystery&Thriller_Movies/Jailer.jpg' , duration: '2 hour 48 minute',
    language: 'Hindi, Tamil',
    year: '2023',},
  { title: 'Kalinga', poster: '/assets/Mystery&Thriller_Movies/Kalinga.jpg' , duration: '1 hour 56 minute',
    language: 'Hindi',
    year: '2024',},
  { title: 'Kalki', poster: '/assets/Mystery&Thriller_Movies/Kalki.jpg' , duration: '3 hour 25 minute',
    language: 'Hindi, Tamil',
    year: '2024',},
  { title: 'Killer', poster: '/assets/Mystery&Thriller_Movies/Killer.jpg' , duration: '1 hour 37 minute',
    language: 'Hindi',
    year: '2024',},
  { title: 'Mouse', poster: '/assets/Mystery&Thriller_Movies/Mouse.jpg' , duration: '1 hour 20 minute',
    language: 'English',
    year: '2021',},
  { title: 'No Time To Die', poster: '/assets/Mystery&Thriller_Movies/No time.jpg' , duration: '2 hour 43 minute',
    language: 'English',
    year: '2011',},
  { title: 'Yashoda', poster: '/assets/Mystery&Thriller_Movies/Yashoda.jpg' , duration: '2 hour 15 minute',
    language: 'Hindi',
    year: '2022',},
  { title: 'You', poster: '/assets/Mystery&Thriller_Movies/You.jpg' , duration: '1 hour 42 minute',
    language: 'English',
    year: '2024',}
];

const biopic = [
  { title: "Schindler's List", poster: "/assets/Biopics/Schindler's List.jpg" , duration: '3 hour 15 minute',
    language: 'Hindi, English',
    year: '1993',},
  { title: 'Paan Singh', poster: '/assets/Biopics/Paan Singh.jpg' , duration: '2 hour 15 minute',
    language: 'Hindi',
    year: '2012',},
  { title: 'Oppenheimer', poster: '/assets/Biopics/Oppenheimer.jpg' , duration: '3 hour 00 minute',
    language: 'Hindi, English',
    year: '2023',},
  { title: 'Ms Dhoni', poster: '/assets/Biopics/MS Dhoni.jpg' , duration: '3 hour 04 minute',
    language: 'Hindi',
    year: '2016',},
  { title: 'Mary Kom', poster: '/assets/Biopics/Mary Kom.jpg' , duration: '2 hour 02 minute',
    language: 'Hindi',
    year: '2014',},
  { title: 'Lincoln', poster: '/assets/Biopics/Lincoln.jpg' , duration: '2 hour 30 minute',
    language: 'Hindi',
    year: '2012',},
  { title: 'Gandhi', poster: '/assets/Biopics/Gandhi.jpg' , duration: '3 hour 11 minute',
    language: 'Hindi, English',
    year: '1982',},
  { title: 'Chaplin', poster: '/assets/Biopics/Chaplin.jpg' , duration: '2 hour 23 minute',
    language: 'Hindi, English',
    year: '1992',},
  { title: 'Bhaag Milkha', poster: '/assets/Biopics/Bhaag Milkha.jpg' , duration: '3 hour 06 minute',
    language: 'Hindi',
    year: '2013',},
  { title: 'Ali', poster: '/assets/Biopics/Ali.jpg' , duration: '7 hour 25 minute',
    language: 'English',
    year: '2021',}
];

const romanticMovies = [
  { title: 'Cast', poster: '/assets/Romantic_movies/Cast.jpg' , duration: '2 hour 23 minute',
    language: 'English',
    year: '2000',},
  { title: 'Forest', poster: '/assets/Romantic_movies/Forest.jpg' , duration: '2 hour 22 minute',
    language: 'English',
    year: '1994',},
  { title: 'Good Will', poster: '/assets/Romantic_movies/Good Will.jpg' , duration: '2 hour 06 minute',
    language: 'English',
    year: '1997',},
  { title: 'Kalank', poster: '/assets/Romantic_movies/Kalank.jpg' , duration: '2 hour 46 minute',
    language: 'Hindi',
    year: '2019',},
  { title: 'LA LA', poster: '/assets/Romantic_movies/LA LA.jpg' , duration: '2 hour 08 minute',
    language: 'English',
    year: '2016',},
  { title: 'October', poster: '/assets/Romantic_movies/October.jpg' , duration: '1 hour 55 minute',
    language: 'Hindi',
    year: '2018',},
  { title: 'Photograph', poster: '/assets/Romantic_movies/Photograph.jpg' , duration: '1 hour 50 minute',
    language: 'Hindi',
    year: '2019',},
  { title: 'Subh', poster: '/assets/Romantic_movies/Subh.jpg' , duration: '1 hour 57 minute',
    language: 'Hindi',
    year: '2020',},
  { title: 'Welcome', poster: '/assets/Romantic_movies/Welcome.jpg' , duration: '2 hour 30 minute',
    language: 'Hindi',
    year: '2007',},
  { title: 'Zindagi', poster: '/assets/Romantic_movies/Zindagi.jpg' , duration: '2 hour 35 minute',
    language: 'Hindi',
    year: '2011',}
];

const comedyMovies = [
  { title: 'Deadpool', poster: '/assets/Comdey_Movies/Deadpool.jpg' , duration: '1 hour 48 minute',
    language: 'Hindi, English',
    year: '2016',},
  { title: 'Dhamaal', poster: '/assets/Comdey_Movies/Dhamaal.jpg' , duration: '2 hour 16 minute',
    language: 'Hindi',
    year: '2007',},
  { title: 'Fukrey 3', poster: '/assets/Comdey_Movies/Fukrey 3.jpg' , duration: '2 hour 27 minute',
    language: 'Hindi',
    year: '2023',},
  { title: 'Hera Pheri', poster: '/assets/Comdey_Movies/Hera Pheri.jpg' , duration: '2 hour 36 minute',
    language: 'Hindi',
    year: '2000',},
  { title: 'Home Alone 2', poster: '/assets/Comdey_Movies/Home Alone 2.jpg' , duration: '2 hour 00 minute',
    language: 'Hindi, English',
    year: '1992',},
  { title: 'Ice Age', poster: '/assets/Comdey_Movies/Ice age Collison Course.jpg' , duration: '1 hour 34 minute',
    language: 'Hindi, English',
    year: '2016',},
  { title: 'Khatta Meeetha', poster: '/assets/Comdey_Movies/Khatta meetha.jpg' , duration: '2 hour 37 minute',
    language: 'Hindi',
    year: '2010',},
  { title: 'The Hangover', poster: '/assets/Comdey_Movies/The Hangover.jpg' , duration: '1 hour 40 minute',
    language: 'Hindi, English',
    year: '2009',},
  { title: 'Munna Bhai', poster: '/assets/Comdey_Movies/Munna Bhai.jpg' , duration: '2 hour 36 minute',
    language: 'Hindi',
    year: '2003',},
  { title: 'Shrek 2', poster: '/assets/Comdey_Movies/Shrek 2.jpg' , duration: '1 hour 33 minute',
    language: 'Hindi, English',
    year: '2004',}
];

const horrorMovie = [
  { title: '1920', poster: '/assets/Horror_Movies/1920.jpg' , duration: '2 hour 23 minute',
    language: 'Hindi',
    year: '2008',},
  { title: 'Alien', poster: '/assets/Horror_Movies/Alien.jpg' , duration: ' hour 02 minute',
    language: 'English',
    year: '2017',},
  { title: 'Bulbbul', poster: '/assets/Horror_Movies/Bulbbul.jpg' , duration: '1 hour 34 minute',
    language: 'Hindi',
    year: '2020',},
  { title: 'Final', poster: '/assets/Horror_Movies/Final.jpg' , duration: '1 hour 32 minute',
    language: 'Hindi',
    year: '2011',},
  { title: 'Munjya', poster: '/assets/Horror_Movies/Munjya.jpg' , duration: '2 hour 03 minute',
    language: 'Hindi',
    year: '2024',},
  { title: 'Ragni', poster: '/assets/Horror_Movies/Ragni.jpg' , duration: '1 hour 59 minute',
    language: 'Hindi',
    year: '2014',},
  { title: 'Shutter Island', poster: '/assets/Horror_Movies/Shutter Island.jpg' , duration: '2 hour 18 minute',
    language: 'English',
    year: '2010',},
  { title: 'Train to Busan', poster: '/assets/Horror_Movies/Train to Busan.jpg' , duration: '1 hour 58 minute',
    language: 'Hindi, English',
    year: '2016',},
  { title: 'Turn', poster: '/assets/Horror_Movies/Turn.jpg' , duration: '1 hour 56 minute',
    language: 'Hindi',
    year: '2013',},
  { title: 'World War', poster: '/assets/Horror_Movies/World war.jpg' , duration: '1 hour 56 minute',
    language: 'Hindi, English',
    year: '2013',}
];

const Home = () => (
  <div className="bg-black text-light min-vh-100">
    <Header />
    <ImageSlider  title="Featured" images={sliderImages}/>
    <SectionTitle title="Trending Movies" />
    <MovieRow movies={trendingMovies} />
    <SectionTitle title="Most Popular" />
    <MovieRow movies={mostPopular} />
    <SectionTitle title="Best in Sports" />
    <MovieRow movies={sports} />
    <SectionTitle title="Recommended Movies" />
    <MovieRow movies={recommendedMovies} />
    <SectionTitle title="Web Series" />
    <MovieRow movies={webSeries} />
    <SectionTitle title="Action Movies" />
    <MovieRow movies={actionMovies} />
    <SectionTitle title="Mystery & Thriller Movies" />
    <MovieRow movies={mysteryMovie} />
    <SectionTitle title="Biopics" />
    <MovieRow movies={biopic} />
    <SectionTitle title="Romantic Movies" />
    <MovieRow movies={romanticMovies} />
    <SectionTitle title="Comedy Movies" />
    <MovieRow movies={comedyMovies} />
    <SectionTitle title="Horror Movies" />
    <MovieRow movies={horrorMovie} />
    <Footer/>
  </div>
);

export default Home;
