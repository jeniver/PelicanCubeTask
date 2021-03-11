import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import subjectsReducer from './SubjectsReducer';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
function App({user}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [HeadTable, setHeadTable] = useState([
    'Head1',
    'Head2',
    'Head3',
    'Head4',
    'Head5',
  ]);
  useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1),
      };
    });
    setDataSource(items);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={() => setModalVisible(true)} />

      <View>
        <Text>Subject details</Text>
      </View>

      <Table style={{borderWidth: 1, borderColor: '#ffa1d2'}}>
        <Row
          data={HeadTable}
          style={{
            height: 50,
            alignContent: 'center',
            backgroundColor: '#ffe0f0',
          }}
          textStyle={{margin: 10}}
        />
        <FlatList
          data={user.all_subjects}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1,
                justifyContent:'flex-start',
                alignItems:'flex-start'
              }}>
              <Text>{item}</Text>
            </View>
          )}
          //Setting the number of column
          numColumns={5}
          keyExtractor={(item, index) => index}
        />
      </Table>

      <View>
        {/* <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1,
              }}>
              <Image
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 100,
                }}
                source={{uri: item.src}}
              />
            </View>
          )}
          //Setting the number of column
          numColumns={5}
          keyExtractor={(item, index) => index}
        /> */}
      </View>
      <Modal
        isVisible={modalVisible}
        swipeDirection="up"
        style={{
          margin: 0,
          padding: 0,
          width: '100%',
          height: '50%',
        }}>
        <View
          style={{
            height: '50%',
            marginTop: 'auto',
            backgroundColor: 'white',
          }}>
          <View>
            <Text>This is Half Modal</Text>
          </View>
          <TouchableOpacity
            style={{
              color: 'red',
              alignSelf: 'flex-end',
            }}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(React.memo(App));
