import withRoot from './modules/withRoot.js';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../Typography/Typography';
import AppFooter from '../Footer/AppFooter';
import AppAppBar from '../Navbars/AppAppBar';
import AppForm from '../AppForm/AppForm';
import { email, required } from '../Form/validation';
import RFTextField from '../Form/RFTextField';
import FormButton from '../Form/FormButton';
import FormFeedback from '../Form/FormFeedBack';

const styles = theme => ({
  form: {
    marginTop: theme.spacing.unit * 6,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  feedback: {
    marginTop: theme.spacing.unit * 2,
  },
});

class ForgotPassword extends React.Component {
  state = {
    sent: false,
  };

  validate = values => {
    const errors = required(['email', 'password'], values, this.props);

    if (!errors.email) {
      const emailError = email(values.email, values, this.props);
      if (emailError) {
        errors.email = email(values.email, values, this.props);
      }
    }

    return errors;
  };

  handleSubmit = () => {};

  render() {
    const { classes } = this.props;
    const { sent } = this.state;

    return (
      <React.Fragment>
        <AppAppBar />
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Forgot your password?
            </Typography>
            <Typography variant="body2" align="center">
              {"Enter your email address below and we'll " +
                'send you a link to reset your password.'}
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={this.handleSubmit}
            subscription={{ submitting: true }}
            validate={this.validate}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Field
                  autoFocus
                  autoComplete="email"
                  component={RFTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                  size="large"
                />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                <FormButton
                  className={classes.button}
                  disabled={submitting || sent}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent ? 'In progress…' : 'Send reset link'}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRoot,
  withStyles(styles),
)(ForgotPassword);