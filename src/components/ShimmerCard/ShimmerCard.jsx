const ShimmerCard = ({ shimmerLength = 6 }) => {
  return (
    <div className="shimmer-container flex flex-wrap g-5 bg-zinc-100">
      {[...Array(shimmerLength)].map((_, index) => {
        return (
          <div key={index} className="shimmer-card h-[300px] w-30 ml-5"></div>
        ); // key added for unique identification
      })}
    </div>
  );
};

export default ShimmerCard;
