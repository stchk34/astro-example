// Import necessary hooks and libraries for state management and data fetching.
import { useState, useEffect } from 'react';
import axios from "axios";


// Define a function to fetch data from the Drupal backend using Axios.
const fetchDataFromDrupal = async (endpoint) => {
    try {
        // Make a GET request to the specified endpoint and retrieve the response data.
        const response = await axios.get(`https://back.vnu.ms1-wishdesk.com/${endpoint}`);
        return response.data;
    } catch (error) {
        // Log and throw an error if there's an issue fetching data from Drupal.
        console.error('Error fetching data from Drupal:', error);
        throw error;
    }
};
// Define a custom hook for fetching data from Drupal.
const useDrupalData = (endpoint) => {
    // Set up state variables for data, loading status, and potential errors.
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use the useEffect hook to fetch data when the component mounts or the endpoint changes.
    useEffect(() => {
        // Define an asynchronous function to fetch data and update state accordingly.
        const fetchData = async () => {
            try {
                // Call the fetchDataFromDrupal function to get data from Drupal.
                const result = await fetchDataFromDrupal(endpoint);

                // Update state with the fetched data and set loading to false.
                setData(result);
                setIsLoading(false);
            } catch (error) {
                // If there's an error, update state with the error and set loading to false.
                setError(error);
                setIsLoading(false);
            }
        };

        // Call the fetchData function when the component mounts or the endpoint changes.
        fetchData();
    }, [endpoint]);

    // Return the data, loading status, and error to be used by the component.
    return { data, isLoading, error };
};

// Export the useDrupalData hook for use in other parts of the application.
export default useDrupalData;