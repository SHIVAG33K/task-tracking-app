export default function Actions({task, index}) {
    return (
        <div>
            <div key={index} className="flex items-center gap-6 border-b pb-6 last:border-0">
                <div className="w-32 text-xl font-medium">{task?.time}</div>
                <div className="w-24 text-xl">{task?.assignee}</div>
                <div className="w-24 text-xl">{task?.reviewer}</div>
                <div className="flex flex-1 items-center">
                    <div className="relative flex h-12 flex-1 items-center">
                        {/* Gray background track */}
                        <div className="absolute h-2 w-full bg-gray-200" />

                        {/* Disclosure Sent */}
                        {task?.status?.disclosureSent && (
                        <div className="relative z-10 flex items-center mr-4">
                            <div className="flex h-12 items-center bg-[#0077b6] px-4 text-sm text-white">
                                Disclosure Sent
                            </div>
                        </div>
                         )}

                        {/* Email Response */}
                        {task?.status?.emailResponse && (
                        <div className="relative z-10 flex items-center mr-4">
                            <div className="flex h-12 items-center bg-[#fb8500] px-4 text-sm text-white">
                                Email Response
                            </div>
                        </div>
                         )}
                        {/* Disclosure Checked or Manual Intervention */}
                        {task?.status?.emailResponse && (
                        <div className="relative z-10 flex items-center mr-4">
                            <div
                            className={`flex h-12 items-center px-4 text-sm text-white ${
                                task?.status?.disclosureChecked
                                ? 'bg-[#023047]' 
                                : 'bg-[#bc4749]' 
                            }`}
                            >
                            {task?.status?.disclosureChecked ? 'Disclosure Checked' : 'Manual Intervention'}
                            </div>
                        </div>
                        )}
                        {task?.status?.completed && (
                            <div className="relative z-10 flex items-center">
                                <div className="flex h-12 items-center bg-[#00b4d8] px-4 text-sm text-white">
                                    Completed
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
