import React, { useContext } from 'react'
import styles from './ActivitySection.module.scss'
import questionIcon from '../../assets/icons/svg/tooltip_icon.svg'
import { Collapse, Divider } from 'antd'
import {DownOutlined} from '@ant-design/icons';
import ProjectContext from '../../context/ProjectContext';

const {Panel} = Collapse

const ActivitySection = () => {
    const {activities,dataProject} = useContext(ProjectContext)

    return (
        <div className = {styles.container}>
            <div className = {styles.modalSection}>
                <h2>Implementación</h2>
                <button><img src = {questionIcon} alt ='icon-question'/></button>
                    {/* <Modal  {...modalProps}></Modal> */}
            </div>
            <div className = {styles.activitySection}>
                <h2>Actividades de restauración</h2>
                <div className = {styles.accordion}>
                    <Divider/>
                    <Collapse ghost = {true} className = {styles.collapse} expandIconPosition ='right'
                    expandIcon = {({ isActive }) => <DownOutlined className = {styles.iconPanel} rotate={isActive ? 180 : 0} />}>
                      {activities.map(i=> (
                        <Panel className = {styles.panel} header= {<h3>{i.name}</h3>}>
                            <p>{i.description}</p> 
                        </Panel>   ))}
                    </Collapse>
                </div>
            </div>

        </div>
    )
} 

export default ActivitySection