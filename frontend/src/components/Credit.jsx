const Credit = () => {
  return (
    <div className="w-full min-h-screen bg-primary p-5 lg:p-20 flex items-center justify-center flex-col gap-5">
      <h1 className="text-white text-3xl font-bold">Big Thanks To</h1>
      <div className="">
        <div className="grid grid-cols-2 gap-1">
          <Contrubutor addition={"rounded-tl-xl"}/>
          <Contrubutor addition={"rounded-tr-xl"}/>
          <Contrubutor addition={""}/>
          <Contrubutor addition={""}/>
          <Contrubutor addition={""}/>
          <Contrubutor addition={""}/>
          <Contrubutor addition={"rounded-bl-xl"}/>
          <Contrubutor addition={"rounded-br-xl"}/>
        </div>
      </div>
    </div>
  );
};

const Contrubutor = ({addition}) => {
  const classes ={
    name:`lg:w-[350px] lg:h-[100px] w-[150px] h-[70px] flex items-center justify-center bg-secondary ${addition}`
  }
  return (
    <div className={classes.name}>
      <h1 className="font-bold lg:text-3xl text-white">Contributor 1</h1>
    </div>
  );
};

export default Credit;
