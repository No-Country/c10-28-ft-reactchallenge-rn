import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CameraType, Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Botons from "./Botons";

const Camara = () => {
  const [hasCamaraPermition, setHasCamaraPermition] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const camaraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCamaraPermition(camaraStatus.status === "granted");
    })();
  }, []);

  if (hasCamaraPermition === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture save!");
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View className="h-full w-full flex justify-center bg-black p-3">
      {!image ? (
        <Camera
          className="flex-1"
          type={type}
          flashMode={flash}
          ref={cameraRef}>
          <View className=" bg-black flex flex-row justify-between pt-7 px-5">
            <Botons
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
              size={28}
            />
            <Botons
              color={
                flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
              }
              icon="flash"
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
              size={28}
            />
          </View>
        </Camera>
      ) : (
        <Image
          source={{ uri: image }}
          className="h-full w-full flex justify-center bg-black p-3"
        />
      )}
      <View className="p-5">
        {image ? (
          <View className="flex flex-row justify-between pb-10">
            <Botons
              title={"Re-take"}
              icon="retweet"
              size={28}
              onPress={() => setImage(null)}
            />
            <Botons title={"Save"} icon="check" onPress={saveImage} size={28} />
          </View>
        ) : (
          <Botons
            title={"Take a picture"}
            icon="camera"
            flex={"row"}
            size={28}
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
};

export default Camara;
