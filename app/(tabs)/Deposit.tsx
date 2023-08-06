import {
  View,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Pressable,
} from 'react-native';
import Colors from '../../constants/Colors';
import i18n from '../../translationService';
import DepositFormSwitch from '../../components/form/DepositFormSwitch';
import { useState } from 'react';
import NumberInput from '../../components/form/NumberInput';

export default function Deposit() {
  const colorScheme = useColorScheme();
  const [binStatus, setBinStatus] = useState<string>('');
  const [compostSmell, setCompostSmell] = useState<string>('');
  const [dryMatter, setDryMatter] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');

  const onPressSend = (e: any) => {
    // send form
    console.log({ amount, dryMatter, binStatus, compostSmell, notes });
  };

  const onPressSkip = (e: any) => {
    // send empty form
  };

  return (
    <View style={{ height: '100%', padding: 8 }}>
      <Text
        style={{
          fontSize: 40,
          paddingVertical: 16,
          color: Colors[colorScheme ?? 'light'].text,
        }}
      >
        {i18n.t('deposit_title')}
      </Text>
      <View style={styles.depositSwitches}>
        <View style={styles.amount}>
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].text,
              fontSize: 18,
              ...styles.amountLabel,
            }}
          >
            Amount
          </Text>
          <NumberInput
            style={styles.amountInput}
            step={0.5}
            amount={amount}
            onChange={setAmount}
          />
        </View>
        <DepositFormSwitch
          onPress={setBinStatus}
          title={i18n.t('deposit_form_bin_status')}
          switchLabels={[
            i18n.t('deposit_form_bin_status_full'),
            i18n.t('deposit_form_bin_status_empty'),
          ]}
        />
        <DepositFormSwitch
          onPress={setCompostSmell}
          title='Compost smell?'
          switchLabels={[i18n.t('no'), i18n.t('yes')]}
        />
        <DepositFormSwitch
          onPress={setDryMatter}
          title='Dry matter?'
          switchLabels={[i18n.t('no'), i18n.t('some'), i18n.t('yes')]}
        />
        <View>
          <Text>Notes</Text>
          <TextInput
            onChangeText={setNotes}
            style={styles.input}
            placeholder="Any notes you'd like to add?"
          />
        </View>
        <View style={styles.buttons}>
          <View
            style={{
              backgroundColor: Colors[colorScheme ?? 'light'].shading,
              ...styles.submitButton,
            }}
          >
            <Pressable
              disabled={!amount}
              style={{ opacity: amount === 0 ? 0.4 : 1 }}
              onPress={onPressSend}
            >
              <Text
                style={{
                  color: Colors[colorScheme ?? 'light'].text,
                }}
              >
                Send
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: Colors[colorScheme ?? 'light'].shading,
              ...styles.submitButton,
            }}
          >
            <Pressable style={styles.submitButton}>
              <Text
                style={{
                  color: Colors[colorScheme ?? 'light'].text,
                }}
              >
                Skip
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  depositSwitches: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '80%',
  },
  depositSwitchContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  amount: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'stretch',
  },
  amountLabel: { flex: 1 },
  amountInput: { flex: 1 },
  input: {
    height: 120,
    textAlignVertical: 'top',
    textAlign: 'left',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitButton: {
    borderRadius: 200,
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
