import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const ComparisonSlider = ({ comparison }: { comparison: number }) => {
  if (comparison === 1) {
    return (
      <ReactCompareSlider
        position={50}
        itemOne={<ReactCompareSliderImage src="/remix-01-orig.png" />}
        itemTwo={<ReactCompareSliderImage src="/remix-01-edited.webp" />}
        style={{ width: "70%" }}
      />
    );
  }

  if (comparison === 2) {
    return (
      <ReactCompareSlider
        position={50}
        itemOne={<ReactCompareSliderImage src="/remix-02-orig.jpeg" />}
        itemTwo={<ReactCompareSliderImage src="/remix-02-edited.webp" />}
        style={{ width: "70%" }}
      />
    );
  }

  return null;
};

export default ComparisonSlider;
