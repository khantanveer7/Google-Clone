import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/search/Search';
import { useStateProviderValue } from '../../StateProvide';
import useGoogleSearch from '../../useGoogleSearch';
import './SearchPage.css';
import Response from '../../Response';


const SearchPage = () => {

    const [{ term }, dispatch] = useStateProviderValue();
    // const { data } = useGoogleSearch(term); // Live API Call
    const data = Response; // Mock API
    // console.log(data);
    console.log(dispatch);
    return (

        <div className="searchPage">

            <div className="searchPage__header">
                <div className="searchPage__img">
                    <Link to='/'>
                        <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Googl Logo" />
                    </Link>
                </div>

                <Search hideButtons />
                <div className="searchPage__tabs">
                    <Typography className='linkActive'> All</Typography>
                    <Typography> Images</Typography>
                    <Typography> Videos</Typography>
                    <Typography> News</Typography>
                    <Typography> Map</Typography>
                    <Typography> Shopping</Typography>
                    <Typography> Books</Typography>
                    <Typography> Flight</Typography>
                    <Typography> More</Typography>
                </div>
                <hr />
                {true && (
                    <div className="searchPage__result">
                        <Typography className="searchPage__counter">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for <strong>{term}</strong>
                        </Typography>
                    </div>
                )}


                {data?.items.map(item => (

                    <div className="searchPage__results">
                        <a className="searchPage__resultsLink" href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img
                                    className="searchPage__resultsImage"
                                    src={item.pagemap?.cse_image[0]?.src}
                                    alt={item.title}
                                />
                            )}
                            <p> {item.displayLink} ▾</p>
                        </a>
                        <a className="searchPage__resultsTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>

                        <p className="searchPage__resultsSnippet"> {item.snippet}</p>

                    </div>




                ))}

            </div>

        </div>

    )
}

export default SearchPage
