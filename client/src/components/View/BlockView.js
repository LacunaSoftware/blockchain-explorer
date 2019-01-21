/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FontAwesome from 'react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Table, Card, CardBody, CardTitle,
} from 'reactstrap';
import { blockHashType, onCloseType } from '../types';
import Modal from '../Styled/Modal';

const styles = theme => ({
  cubeIcon: {
    color: '#ffffff',
    marginRight: 20,
  },
});

class BlockView extends Component {
  handleClose = () => {
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { blockHash, classes } = this.props;
    if (!blockHash) {
      return (
        <Modal>
          {modalClasses => (
            <Card className={modalClasses.card}>
              <CardTitle className={modalClasses.title}>
                <FontAwesome name="cube" />
                Detalhes do Bloco
              </CardTitle>
              <CardBody className={modalClasses.body}>
                <span>
                  {' '}
                  <FontAwesome name="circle-o-notch" size="3x" spin />
                </span>
              </CardBody>
            </Card>
          )}
        </Modal>
      );
    }
    return (
      <Modal>
        {modalClasses => (
          <div className={modalClasses.dialog}>
            <Card className={modalClasses.card}>
              <CardTitle className={modalClasses.title}>
                <FontAwesome name="cube" className={classes.cubeIcon} />
                Detalhes do Bloco
                <button
                  type="button"
                  onClick={this.handleClose}
                  className={modalClasses.closeBtn}
                >
                  <FontAwesome name="close" />
                </button>
              </CardTitle>
              <CardBody className={modalClasses.body}>
                <Table striped hover responsive className="table-striped">
                  <tbody>
                    <tr>
                      <th>
Nome do Canal
                      </th>
                      <td>
                        {blockHash.channelname}
                      </td>
                    </tr>
                    <tr>
                      <th>
Número do Bloco
                      </th>
                      <td>
                        {blockHash.blocknum}
                      </td>
                    </tr>
                    <tr>
                      <th>
Criado em
                      </th>
                      <td>
                        {blockHash.createdt}
                      </td>
                    </tr>

                    <tr>
                      <th>
Número de Transações
                      </th>
                      <td>
                        {blockHash.txcount}
                      </td>
                    </tr>
                    <tr>
                      <th>
Hash do Bloco
                      </th>
                      <td>
                        {blockHash.blockhash}
                        <button type="button" className={modalClasses.copyBtn}>
                          <div className={modalClasses.copy}>
Copiar
                          </div>
                          <div className={modalClasses.copied}>
Copiado
                          </div>
                          <CopyToClipboard text={blockHash.blockhash}>
                            <FontAwesome name="copy" />
                          </CopyToClipboard>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>
Dados do Hash
                      </th>
                      <td>
                        {blockHash.datahash}
                        <button type="button" className={modalClasses.copyBtn}>
                          <div className={modalClasses.copy}>
Copiar
                          </div>
                          <div className={modalClasses.copied}>
Copiado
                          </div>
                          <CopyToClipboard text={blockHash.datahash}>
                            <FontAwesome name="copy" />
                          </CopyToClipboard>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>
Prehash
                      </th>
                      <td>
                        {blockHash.prehash}
                        <button type="button" className={modalClasses.copyBtn}>
                          <div className={modalClasses.copy}>
Copiar
                          </div>
                          <div className={modalClasses.copied}>
Copiado
                          </div>
                          <CopyToClipboard text={blockHash.prehash}>
                            <FontAwesome name="copy" />
                          </CopyToClipboard>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        )}
      </Modal>
    );
  }
}

BlockView.propTypes = {
  blockHash: blockHashType.isRequired,
  onClose: onCloseType.isRequired,
};

export default withStyles(styles)(BlockView);
