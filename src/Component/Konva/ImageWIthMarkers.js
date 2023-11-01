import React, { useEffect, useState, useRef } from "react";
import { Stage, Layer, Image, Rect } from "react-konva";
import axios from "axios";
import { BASEURL } from "../../Utility/Config";
import Swal from "sweetalert2";

const ImageWithMarker = ({ imageUrl, data }) => {
  const [imageObj, setImageObj] = useState(null);
  const [datas, setDatas] = useState();
  const divRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const image = new window.Image();
    image.src = imageUrl;

    image.onload = () => {
      setImageObj(image);
    };
  }, [imageUrl]);

  function fetctData() {
    setDatas(data);
  }

  useEffect(() => {
    fetctData();
  }, [data]);

  return (
    <>
      <div ref={divRef}>
        <Stage width={window.innerWidth} height={window.innerHeight - 100}>
          <Layer>

            {imageObj && (
              <Image
                image={imageObj}
                width={window.innerWidth}
                height={window.innerHeight - 100}
              />
            )}
            {imageObj &&
              datas &&
              datas.map((data, dataIndex) => {
                return data.outputs.outputs.map((output, outputIndex) => {
                  
                  console.log("output line 52",data);
                 return <Rect
                    x={output.location[0]}
                    y={output.location[1]}
                    width={output.location[2] + 1133}
                    height={output.location[3] + 264}
                    fill="transparent"
                    stroke={
                      output.class === 1
                        ? "red"
                        : output.class === 2
                        ? "#F7B900"
                        : "green"
                    }
                    strokeWidth={3}
                  />
              }
              );
              })}
              
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default ImageWithMarker;
