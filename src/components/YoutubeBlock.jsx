import YoutubeEmbed from './YoutubeEmbed.jsx';
import useDrupalData from "../api/api.js";

export default function YoutubeBlock({endpoint}) {
    const { data: youtubeBlockData, isFetching, isLoading, error } = useDrupalData(endpoint);
    return (
        <>
            {youtubeBlockData?.data?.attributes?.field_link_to?.uri && (
                <div className="youtube-block">
                    <YoutubeEmbed embedId={youtubeBlockData?.data?.attributes?.field_link_to?.uri} />
                </div>
            )}
        </>
    );
}
