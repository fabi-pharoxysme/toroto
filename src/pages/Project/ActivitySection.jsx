import React, { Fragment, useState, forwardRef } from 'react'
import styles from './ActivitySection.module.scss'
import questionIcon from '../../assets/icons/svg/tooltip_icon.svg'
import { Collapse, Divider, Modal } from 'antd'
import {DownOutlined} from '@ant-design/icons';
  
import icon from '../../assets/icons/svg/chevron-down.svg'

const {Panel} = Collapse
const ActivitySection = (name, description) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(!isModalVisible);
      };

      let modalProps = {
          visible: isModalVisible,
          footer: null,
          centered: true,
      }
    return (
        <div className = {styles.container}>
            <div className = {styles.modalSection}>
                <h2>Implementación</h2>
                <button onClick = {showModal}><img src = {questionIcon} alt ='icon-question'/></button>
                    <Modal  {...modalProps}></Modal>
            </div>
            <div className = {styles.activitySection}>
                <h2>Actividades de restauración</h2>
                <div className = {styles.accordion}>
                    <Divider/>
                    <Collapse ghost = {true} className = {styles.collapse} expandIconPosition = 'left'
                    expandIcon = {({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}>
                        <Panel className = {styles.panel} header= {'holi'}>
                            <p>holi</p> 
                        </Panel>
                       
                    </Collapse>

                </div>
            </div>

        </div>
    )
} 

export default ActivitySection