import React , {useRef, useState} from 'react'

const Video = () => {
     const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current.play();
    }, 200); // give time for video to appear in DOM
  };

  return (
    
       <div className="max-w-7xl max-h-[600px] relative mx-auto bg-gray-800 rounded-4xl text-white h-auto overflow-hidden my-16 flex justify-center items-center">

      {/* Show image when not playing */}
      {!playing && (
        <>
          <img
       src="/images/doi_gold_members/house_5.png"
            className="h-full w-auto object-center"
            alt="video image"
          />
          <button
            onClick={handlePlay}
            className="absolute text-white text-4xl z-10"
          >
            <img
              src="/images/doi_gold_members/icons/play-circle-02.svg"
              alt="video Play Icon"
            />
          </button>
        </>
      )}

      {/* Show video when playing */}
      {playing && (
        <video
          ref={videoRef}
          className="w-full  overflow-hidden object-center"
          controls
        >
          <source src="https://www.pexels.com/download/video/2887459/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default Video
