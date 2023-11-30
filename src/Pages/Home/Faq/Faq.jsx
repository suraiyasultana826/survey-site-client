import faq from '../../../assets/faq.png'
const Faq = () => {
    return (
        <div>
            <div className='md:flex justify-center items-center'>
                <div>
                    <img src={faq} alt="" />
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How do I participate in a survey on this website?
                        </div>
                        <div className="collapse-content">
                            <p> Once logged in, browse the available surveys. You can often find a list of surveys on your dashboard or a dedicated surveys page.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        How can I track the surveys I've completed on the website?
                        </div>
                        <div className="collapse-content">
                            <p>log in to your account and navigate to the "Survey History" or "Completed Surveys" section. Here, you'll find a list of surveys you've participated in, along with details such as completion date and any rewards earned.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                        Is there a way to save my progress in a survey and come back to it later?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, most surveys on our website allow you to save your progress and return to complete them later. Look for a "Save" or "Resume Later" option within the survey interface. Make sure to note any time limits mentioned in the survey instructions.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;