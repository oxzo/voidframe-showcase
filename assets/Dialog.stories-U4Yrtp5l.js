import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-q-nZj2ek.js";import{D as t,M as g,a as D,b as u,c as m,d as p}from"./Dialog-D4FrLeVj.js";import{$ as h}from"./Dialog-CNgGrXQT.js";const x={title:"Shared/Dialog",component:t,parameters:{layout:"centered",docs:{description:{component:"Intrusive, deliberate, and framed as a system broadcast. A Dialog interrupts — its diagonal-hatched title bar and `[ ESC ]` control make it look like an incoming transmission, not a friendly pop-up. Reserve for flows where the operator must acknowledge a consequence."}}}},o={render:()=>e.jsxs(h,{defaultOpen:!0,children:[e.jsx(r,{children:"OPEN MODAL"}),e.jsx(g,{isDismissable:!0,children:e.jsxs(t,{children:[e.jsx(D,{children:e.jsx(u,{children:"CONFIRM PURGE"})}),e.jsx(m,{children:e.jsx("p",{children:"Irreversible. Node contents will be zeroed out on the next tick."})}),e.jsxs(p,{children:[e.jsx(r,{intent:"ghost",children:"CANCEL"}),e.jsx(r,{intent:"destructive",children:"PROCEED"})]})]})})]})},n={render:()=>e.jsxs(h,{children:[e.jsx(r,{children:"OPEN MODAL"}),e.jsx(g,{isDismissable:!0,children:e.jsxs(t,{children:[e.jsx(D,{children:e.jsx(u,{children:"SYSTEM CHECK"})}),e.jsx(m,{children:e.jsx("p",{children:"All subsystems nominal."})}),e.jsx(p,{children:e.jsx(r,{children:"ACK"})})]})})]})};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <DialogTrigger defaultOpen>
      <Button>OPEN MODAL</Button>
      <Modal isDismissable>
        <Dialog>
          <DialogHeader>
            <DialogTitle>CONFIRM PURGE</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>Irreversible. Node contents will be zeroed out on the next tick.</p>
          </DialogBody>
          <DialogFooter>
            <Button intent="ghost">CANCEL</Button>
            <Button intent="destructive">PROCEED</Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DialogTrigger>
      <Button>OPEN MODAL</Button>
      <Modal isDismissable>
        <Dialog>
          <DialogHeader>
            <DialogTitle>SYSTEM CHECK</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>All subsystems nominal.</p>
          </DialogBody>
          <DialogFooter>
            <Button>ACK</Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["OpenByDefault","TriggerClosed"],O=Object.freeze(Object.defineProperty({__proto__:null,OpenByDefault:o,TriggerClosed:n,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{O as D};
