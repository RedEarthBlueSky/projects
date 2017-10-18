import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import ItemContainer from './ItemContainer';
import ContainerSection from './ContainerSection';
import Button from './Button';
// listItem is basically the props object
const ItemDetails = ({ listItem }) => {
  const { title, artist, thumbnail_image, image, url } = listItem;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    thumbnailStyle,
    thumbnailContainerStyle
  } = styles;
  return (
    <ItemContainer>

      <ContainerSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </ContainerSection>

      <ContainerSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </ContainerSection>

      <ContainerSection>
        <Button
          onPress={() => Linking.openURL(url)}
        >
          Click to Buy {title}!
        </Button>
      </ContainerSection>

    </ItemContainer>
  );
};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: 60,
  }
};

export default ItemDetails;
