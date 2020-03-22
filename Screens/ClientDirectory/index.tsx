import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Button, CheckBox } from 'react-native-elements';

import dummyData, { IClient } from './tableData';

function ClientDirectory() {
  const [tableHead, setTableHead] = useState([
    '',
    'Client Id',
    'Injury',
    'Injury side or SCI level',
    'Strength',
    'Created At'
  ]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let arr = [];

    dummyData.map(
      (item: IClient): Array<IClient> => {
        arr = [...arr, [false, ...Object.values(item)]];
        return arr;
      }
    );
    setTableData(arr);
  }, []);

  const onClickCheckbox = (index: number): void => {
    const arr = tableData;
    arr[index][0] = !arr[index][0];
    setTableData([...arr]);
  };

  const element = (data: boolean, index: number): JSX.Element => {
    return (
      <View>
        <CheckBox
          key={index}
          checked={data}
          onPress={() => onClickCheckbox(index)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Button title="New Client" />
        </View>
        <View style={styles.cardContent}>
          <ScrollView horizontal={true}>
            <Table style={{ minWidth: '100%' }}>
              <TableWrapper style={styles.row}>
                {tableHead.map(
                  (cellData: any, cellIndex: number): JSX.Element => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      style={{
                        minWidth: cellIndex === 3 || cellIndex === 5 ? 150 : 80,
                        width:
                          cellIndex === 3 || cellIndex === 5 ? '20%' : '15%',
                        borderBottomWidth: 1,
                        borderColor: '#C1C0B9'
                      }}
                      textStyle={styles.text}
                    />
                  )
                )}
              </TableWrapper>
              {tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map(
                    (cellData: any, cellIndex: number): JSX.Element => (
                      <Cell
                        key={cellIndex}
                        data={
                          cellIndex === 0 ? element(cellData, index) : cellData
                        }
                        style={{
                          minWidth:
                            cellIndex === 3 || cellIndex === 5 ? 150 : 80,
                          width:
                            cellIndex === 3 || cellIndex === 5 ? '20%' : '15%',
                          borderBottomWidth: 1,
                          borderColor: '#C1C0B9'
                        }}
                        textStyle={styles.text}
                      />
                    )
                  )}
                </TableWrapper>
              ))}
            </Table>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    paddingLeft: 50,
    paddingRight: 50
  },
  cardContainer: {
    marginTop: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  cardHeader: {
    alignSelf: 'flex-start',
    padding: 20
  },
  cardContent: {},
  text: { margin: 6 },
  row: { flexDirection: 'row', minWidth: '100%' }
});

export default ClientDirectory;
