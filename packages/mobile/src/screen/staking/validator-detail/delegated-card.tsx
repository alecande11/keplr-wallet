import React, {FunctionComponent} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../stores';
import {Text} from 'react-native';
import {useStyle} from '../../../styles';
import {Button} from '../../../components/button';
import {Box} from '../../../components/box';
import {Gutter} from '../../../components/gutter';
import {Column, Columns} from '../../../components/column';
import {useNavigation} from '@react-navigation/native';
import {StackNavProp} from '../../../navigation';
import {FormattedMessage, useIntl} from 'react-intl';

export const DelegatedCard: FunctionComponent<{
  chainId: string;
  validatorAddress: string;
  isFromRedelegate?: boolean;
}> = observer(({validatorAddress, chainId, isFromRedelegate}) => {
  const {queriesStore, accountStore} = useStore();
  const navigation = useNavigation<StackNavProp>();
  const intl = useIntl();

  const account = accountStore.getAccount(chainId);
  const queries = queriesStore.get(chainId);

  const style = useStyle();

  const staked = queries.cosmos.queryDelegations
    .getQueryBech32Address(account.bech32Address)
    .getDelegationTo(validatorAddress);

  const rewards = queries.cosmos.queryRewards
    .getQueryBech32Address(account.bech32Address)
    .getStakableRewardOf(validatorAddress);

  return staked && !staked.toDec().isZero() ? (
    <Box>
      <Text
        style={style.flatten([
          'subtitle3',
          'color-text-middle',
          'padding-x-6',
          'padding-y-4',
        ])}>
        <FormattedMessage id="page.stake.validator-detail.delegated-card.label" />
      </Text>
      <Gutter size={8} />
      <Box
        paddingX={16}
        paddingY={20}
        borderRadius={6}
        backgroundColor={style.get('color-card-default').color}>
        <Columns sum={1} alignY="center">
          <Text style={style.flatten(['body1', 'color-text-middle'])}>
            <FormattedMessage id="page.stake.validator-detail.delegated-card.staked-label" />
          </Text>
          <Column weight={1} />
          <Text style={style.flatten(['body1', 'color-text-high'])}>
            {staked
              ?.trim(true)
              .shrink(true)
              .maxDecimals(6)
              .inequalitySymbol(true)
              .toString()}
          </Text>
        </Columns>

        <Gutter size={4} />

        <Columns sum={1} alignY="center">
          <Text style={style.flatten(['body1', 'color-text-middle'])}>
            <FormattedMessage id="page.stake.validator-detail.delegated-card.reward-label" />
          </Text>
          <Column weight={1} />
          <Text style={style.flatten(['body1', 'color-text-high'])}>
            {rewards
              ?.trim(true)
              .shrink(true)
              .maxDecimals(6)
              .inequalitySymbol(true)
              .toString()}
          </Text>
        </Columns>

        {isFromRedelegate ? null : (
          <React.Fragment>
            <Gutter size={12} />

            <Columns sum={1} gutter={10}>
              <Button
                color="secondary"
                text={intl.formatMessage({
                  id: 'page.stake.validator-detail.delegated-card.redelegate-button',
                })}
                containerStyle={style.flatten(['flex-1'])}
                size="large"
                onPress={() => {
                  navigation.navigate('Stake', {
                    screen: 'Stake.Redelegate',
                    params: {
                      chainId,
                      validatorAddress,
                    },
                  });
                }}
              />
              <Button
                containerStyle={style.flatten(['flex-1'])}
                text={intl.formatMessage({
                  id: 'page.stake.validator-detail.delegated-card.undelegate-button',
                })}
                size="large"
                onPress={() => {
                  navigation.navigate('Stake', {
                    screen: 'Stake.Undelegate',
                    params: {
                      chainId,
                      validatorAddress,
                    },
                  });
                }}
              />
            </Columns>
          </React.Fragment>
        )}
      </Box>
    </Box>
  ) : null;
});
