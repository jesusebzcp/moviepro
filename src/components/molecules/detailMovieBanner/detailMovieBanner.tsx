import {SvgCalendar, SvgMinutes} from '@/assets/svg';
import {SvgTicket} from '@/assets/svg/svgTicket';
import {COLORS, FONTS} from '@/theme';
import React, {Fragment, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface DetailMovieBannerProps {
  year: string;
}

export const DetailMovieBanner = ({year}: DetailMovieBannerProps) => {
  const _showDetail = useMemo(
    () => [
      {
        label: year,
        Icon: SvgCalendar,
      },
      {
        label: '148 minutos',
        Icon: SvgMinutes,
      },
      {
        label: 'Action',
        Icon: SvgTicket,
      },
    ],
    [year],
  );
  return (
    <View style={styles.content}>
      {_showDetail.map(({Icon, label}, index) => (
        <Fragment key={`${label}${index}`}>
          <View style={styles.item}>
            <Icon />
            <Text style={styles.label}>{label}</Text>
          </View>
          {index < _showDetail.length - 1 ? (
            <View style={styles.separator} />
          ) : null}
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  label: {
    ...FONTS.style.medium(COLORS.secondary, FONTS.size.h6, 'center'),
    marginLeft: 5,
  },
  item: {
    marginHorizontal: 10,
    borderColor: COLORS.secondary,
    flexDirection: 'row',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.secondary,
  },
});
