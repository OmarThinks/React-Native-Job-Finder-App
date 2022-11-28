import React, {useEffect, useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from 'react-native-actions-sheet';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useTheme, Avatar, Button, Text as RNPText} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectJobsInfo} from '../../features/jobsInfo/jobsInfoSlice';

import Unorderedlist from 'react-native-unordered-list';

const styles = StyleSheet.create({
  secondary18: {
    flex: 1,
  },
  paragraphContainer: {
    alignItems: 'flex-start',
  },
  paragraph: {
    marginTop: 20,
    fontSize: 13,
  },
});

const NavButton = ({text, activeTab, setActiveTab}) => {
  const active = text === activeTab;

  const theme = useTheme();

  const backgroundColor = active
    ? theme.colors.surface
    : theme.colors.background2;
  const textColor = active
    ? theme.colors.buttonText
    : theme.colors.secondaryText;

  return (
    <Button
      mode="contained"
      buttonColor={backgroundColor}
      textColor={textColor}
      onPress={() => {
        setActiveTab(text);
      }}
      contentStyle={{height: 50, width: 123}}
      style={{borderRadius: 12, fontSize: 30}}>
      <Text style={{fontSize: 13, fontWeight: '500'}}>{text}</Text>
    </Button>
  );
};

const StringsToUnorderedList = ({strings}) => {
  const theme = useTheme();
  const toRender = strings.map(item => {
    //console.log("item is");
    //console.log(item);
    //console.log(typeof item);
    return (
      <Unorderedlist
        style={{
          ...styles.paragraph,
          color: theme.colors.secondaryText,
          backgroundColor: theme.colors.background2,
        }}
        key={item}>
        <RNPText
          style={{
            ...styles.paragraph,
            color: theme.colors.secondaryText,
            backgroundColor: theme.colors.background2,
          }}>
          {item}
        </RNPText>
      </Unorderedlist>
    );
  });

  return <View style={{...styles.paragraphContainer}}>{toRender}</View>;
};

const ListView = ({items, placeholderPluralName}) => {
  const theme = useTheme();

  if (items.length === 0) {
    return (
      <Text
        style={{
          ...styles.paragraph,
          color: theme.colors.secondaryText,
          paddingLeft: 15,
        }}>
        Employer did not provide {placeholderPluralName} to display for this
        job.
      </Text>
    );
  }
  return <StringsToUnorderedList strings={items} />;
};

function MySheet(props) {
  const jobId = props.payload; // useless now
  //console.log(jobId);

  const {
    company, // later
    description,
    employerImage,
    employerName,
    jobType,
    location,
    reviews, // later
    salary,
    title,
  } = useSelector(selectJobsInfo);
  const {qualifications} = description; // later

  const windowHeight = Dimensions.get('window').height;
  const maxTabHeight = windowHeight * 0.7;

  const [activeTab, setActiveTab] = useState('Description');

  const tabHeader =
    (activeTab === 'Description' ? 'Qualifications' : activeTab) + ':';

  const theme = useTheme();

  let detailsView = <></>;
  if (activeTab === 'Description') {
    detailsView = (
      <ListView
        items={qualifications}
        placeholderPluralName={'qualifications'}
      />
    );
  } else if (activeTab === 'Company') {
    detailsView = (
      <Text
        style={{
          ...styles.paragraph,
          color: theme.colors.secondaryText,
          backgroundColor: theme.colors.background2,
          paddingLeft: 15,
        }}>
        {company}
      </Text>
    );
  } else {
    detailsView = (
      <ListView items={reviews} placeholderPluralName={'reviews'} />
    );
  }

  return (
    <ActionSheet id={props.sheetId}>
      <View style={{maxHeight: maxTabHeight}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: theme.colors.background2,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <View
              style={{
                width: 80,
                height: 4,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: theme.colors.sheetTop,
              }}></View>

            <Image
              source={{
                uri: employerImage,
              }}
              style={{width: 70, height: 70, borderRadius: 20, marginTop: 32}}
            />

            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                lineHeight: 20,
                color: theme.colors.primaryText,
                marginTop: 20,
              }}>
              {title}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <Text
                style={{
                  color: theme.colors.primaryText,
                  fontWeight: '500',
                  fontSize: 14,
                }}>
                {employerName}
              </Text>
              <View
                style={{
                  width: 15,
                  height: 0,
                  borderWidth: 1.5,
                  borderColor: theme.colors.primaryText,
                  marginLeft: 7,
                }}
              />
              <Image
                source={require('../../shapes/Location.png')}
                style={{width: 11.5, height: 13.7, marginLeft: 13.8}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: theme.colors.secondaryText,
                  marginLeft: 8.3,
                }}>
                {location}
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                alignItems: 'center',
                marginTop: 31,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../shapes/Watch.png')}
                  style={{width: 20, height: 20}}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: '400',
                    fontSize: 18,
                    color: theme.colors.secondaryText,
                  }}>
                  {jobType}
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 18,
                  color: theme.colors.secondaryText,
                }}>
                ${salary}/m
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 31,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                width: '100%',
              }}>
              <NavButton
                text={'Description'}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavButton
                text={'Company'}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavButton
                text={'Reviews'}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </View>

            <Text
              style={{
                alignSelf: 'flex-start',
                marginTop: 40,
                fontSize: 18,
                fontWeight: '500',
                color: theme.colors.primaryText,
                marginLeft: 20,
              }}>
              {tabHeader}
            </Text>
          </View>
          <View style={{marginHorizontal: 20}}>{detailsView}</View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 30,
              marginBottom: 30,
            }}>
            <Button
              style={{flexGrow: 1, borderRadius: 12}}
              buttonColor={theme.colors.surface}
              textColor={theme.colors.buttonText}
              onPress={() => {}}
              contentStyle={{height: 54}}>
              Apply Now
            </Button>
            <TouchableOpacity
              style={{
                marginLeft: 20,
                borderRadius: 12,
                backgroundColor: theme.colors.surface,
                height: 54,
                width: 54,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../shapes/Chat.png')}
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet('mysheet', MySheet);

export default MySheet;
