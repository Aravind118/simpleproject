import React, {  useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function Dropdown(){
    const [users, setNames]=useState([])
    
    useEffect(function(){
        fetch("https://jsonplaceholder.typicode.com/users",{method:'get'})
        .then(res=>res.json())
        .then(res=>setNames(res))
    },[])

    /*const [users, setNames]=useState([])
    useEffect(function(){
        fetch("https://ui.gitops-test.dev.opsmx.net/gate/dashboardservice/v4/users/user2/applications?pageNo=0&pageLimit=10&sortBy=time&sortOrder=desc&search=",{method:'get'})
        .then(res=>res.json())
        .then(res=>setNames(res))
    })*/
    
    /*const names=["JIRA","GITHUB","AUTOPILOT","SONARQUBE","JENKINS","AQUAWAVE","APPSCAN","BAMBOO","BITBUCKET","PRISMACLOUD","ARTIFACTORY","JFROG","SERVICENOW","BITBUCKET_SERVER","HELM"]*/
    /*const [applications, setApplication]=useState([])
    useEffect(function(){
        fetch("https://ui.gitops-test.dev.opsmx.net/gate/visibilityservice/v1/toolConnectors/configuredConnectorTypes",{method:'get'})
        .then(res=>res.json())
        .then(res=>console.log(res))

    })*/
    /*const names=["JIRA","GITHUB","AUTOPILOT","SONARQUBE","JENKINS","AQUAWAVE","APPSCAN","BAMBOO","BITBUCKET","PRISMACLOUD","ARTIFACTORY","JFROG","SERVICENOW","BITBUCKET_SERVER","HELM"]
    const [applications, setApplication]=useState([])
    useEffect(function(){
        fetch("https://ui.gitops-test.dev.opsmx.net/gate/dashboardservice/v4/users/user2/applications?pageNo=0&pageLimit=10&sortBy=time&sortOrder=desc&search=",{method:'get'})
        .then(res=>res.json())
        .then(res=>console.log(res))
        
        
    })*/
    const [singleValue, setSingleValue]=useState([])
    

    const handleChange=(e,index)=>{
       // alert  (e.target.value)
        const newTarget=e.target
        fetch("https://jsonplaceholder.typicode.com/users/"+newTarget.value,{method:'get'})
        .then(res=>res.json())
        .then(res=>setSingleValue(res))
        
        console.log(e.target.value)
        /*const removerow=[...rows]
        removerow[index][name]=value
        setRows(removerow)*/
        const {name,value}=newTarget
        const newData=[...users]
        newData[index][name]=value
        console.log(newData)
        
        
    }
    const items={
        Dropdown1:'',
        Dropdown2:'',
        Dropdown3:''
   }
   const [rows, setRows]=useState([{items}])
    const HandleAdd=()=>{
        
       setRows([...rows,items])
          
    }
    const handleRemove=(index)=>{
        const removerow=[...rows]
        removerow.splice(index,1)
        setRows(removerow)
    }
    
    return <div>
        <div className=" card  ">
            <div className="card-body ">
                <table className="table table-borderless">
                <thead>
                    <tr>
                    <th width="33%" scope="col">Dropdown1</th>
                    <th width="33%" scope="col">Dropdown2</th>
                    <th width="33%" scope="col">Dropdown3</th>
                    </tr>
                </thead>
                    <tbody>
                    {rows.map((items,index)=>(
                    <tr> 
                    <td width="33%" >
                            <select id='name{index}'   onChange={(e)=>handleChange(e,index)} className="dropdown_class">
                                <option value="0"></option>
                                    {
                                        users.map((user,idex)=>{
                                            return<option className="dropdown1" name="dropdown1" id="dropdown1" key={index}   value={user.id}>{user.name}</option>
                                        })
                                    }
                            </select>
                    </td>
                    <td width="33%">
                        <select id="username{index}"   className="dropdown_class dropdown2">
                            <option name="dropdown2" id="dropdown2"  className="dropdown2" key={index} value={singleValue.Dropdown2} >{singleValue.username}</option>
                        </select>  
                    </td>
                    <td width="33%">
                        <select id="email{index}"  className="dropdown_class dropdown3">
                            <option name="dropdown3" id="dropdown3"  key={index} value={singleValue.Dropdown2}>{singleValue.email}</option>  
                        </select>
                    </td>
                    <td>
                        {rows.length >1 && (<button onClick={handleRemove}>Remove</button>)}
                    </td>
                    
                    </tr>
                    
                    ))}
                    
                    </tbody>
                </table>
                <button className="col-12" onClick={HandleAdd}>Add new row</button>
                
                
                 
                </div>
            </div>
        </div>
}

export default Dropdown