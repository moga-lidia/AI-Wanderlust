import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '@/src/theme/colors';

export type OptionCardType = {
  id: number,
  title: string;
  desc: string;
  icon: string;
};

interface OptionCardProps {
  option: OptionCardType;
  selectedOption: OptionCardType;
}

export default function OptionCard({ option, selectedOption }: OptionCardProps) {
  return (
    <View style={[{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.gradient_light_gray, borderRadius: 15,
    }, selectedOption && selectedOption.id === option.id && {borderWidth: 3}]}>
      <View>
        <Text style={{
          fontSize:20,
          fontFamily: 'karla',
        }}>{option.title}</Text>
        <Text style={{
          fontSize:17,
          fontFamily: 'karla-light',
          color: colors.blue_gray,
        }}>{option.desc}</Text>
      </View>
        <Text style={{
          fontSize:35,
          fontFamily: '',
        }}>{option.icon}</Text>
    </View>
  );
}
