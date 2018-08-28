import React from 'react';
import Dialog from 'material-ui/Dialog';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Alert extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          title="Aguarde um momento"
          modal={false}
          open={this.props.open}
        >
          Atualizando as informações
        </Dialog>
      </div>
    );
  }
}
