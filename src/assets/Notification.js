class Notification{
    success(){
        // eslint-disable-next-line no-undef
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Successfully Done',
            timeout: 1000,
        }).show();
    }

}

// eslint-disable-next-line no-class-assign
export default Notification = new Notification()