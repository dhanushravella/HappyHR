import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 8,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    margin: 'auto',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 16,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const HaiProfileCard = ({
  userName,
  designation,
  avatar,
  empCode,
  department,
  location,
  email,
  phone,
}) => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="pad5">
          <Avatar className={styles.avatar} src={avatar} />
          <h3 className={styles.heading}>{userName}</h3>
          <p className={styles.subheader}>{designation}</p>
          <Link underline="hover" color="Secondary" component="button" variant="subtitle1">
            View Profile
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <p className={styles.statValue}>{email}</p>
          <p className={styles.statValue}>{phone}</p>
          <p className={styles.statValue}>{empCode}</p>
          <p className={styles.statValue}>{department}</p>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HaiProfileCard;
