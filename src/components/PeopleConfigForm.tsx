/**
 * =============================================
 *  YOUR WORK GOES HERE
 * =============================================
 *
 * Build the "People Configuration" form as described in the README.
 *
 * Hooks you must use (imported from src/hooks/):
 *   - useMockPeople()    → loads people list via useQuery
 *   - useMockSubmit()    → submits the payload via useMutation
 *
 * Ant Design components you'll need:
 *   Form, Select, Input, Button, Spin, message
 *
 * Good luck!
 */

import { Button, Form, Input, Select, Spin, message } from "antd";
import { useMockPeople } from "../hooks/useMockPeople";
import { useMockSubmit } from "../hooks/useMockSubmit";
import type { SubmitItem } from "../types";

const PeopleConfigForm = () => {
  const [form] = Form.useForm();

  // ---- Queries ----
  const { data: people, isLoading: isPeopleLoading } = useMockPeople();

  // ---- Mutation ----
  const { mutate: submit, isPending: isSubmitting } = useMockSubmit();

  // ---- Watch form values ----
  const selectedPeople: string[] = Form.useWatch("selectedPeople", form) || [];

  // ---- Select options ----
  const selectOptions =
    people?.map((p) => ({
      label: `${p.fullName} — ${p.department}`,
      value: `${p.id}~${p.fullName}`,
    })) || [];

  // ---- Submit handler ----
  const onFinish = () => {
    const fields = form.getFieldValue("formFields") || {};

    // TODO: Build the payload based on selectedPeople and formFields values.
    const payload: SubmitItem[] = [];

    submit(payload, {
      onSuccess: (res) => {
        if (res.status === "success") {
          message.success(res.msg);
        } else {
          message.error(res.msg);
        }
      },
      onError: (err) => {
        message.error(err.message || "Something went wrong");
      },
    });
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Spin spinning={isPeopleLoading}>
        {/* ====================== */}
        {/* ===Select People=== */}
        <Form.Item
          label="Select People"
          name="selectedPeople"
          rules={[
            {
              required: true,
              message: "Please select at least one person",
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Search and select people"
            options={selectOptions}
            loading={isPeopleLoading}
            maxTagCount={5}
            allowClear
            style={{ width: "100%" }}
          />
        </Form.Item>

        {/* ====================== */}
        {/* ===Per-person sections=== */}
        {selectedPeople.map((personKey) => {
          const [, personName] = personKey.split("~");

          return (
            <div
              key={personKey}
              style={{
                border: "1px solid #eee",
                borderRadius: 8,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 12 }}>
                {personName}
              </div>

              {/* --- Name --- */}
              <Form.Item
                name={["formFields", personKey, "name"]}
                label="Name"
                initialValue={personName}
                rules={[{ required: true, message: "Please enter a name" }]}
              >
                <Input placeholder="Full name" />
              </Form.Item>

              {/* --- Age --- */}
              <Form.Item
                name={["formFields", personKey, "age"]}
                label="Age"
                rules={[
                  { required: true, message: "Age is required" },
                  {
                    validator: (_, value) => {
                      const age = Number(value);
                      if (!value || (age >= 1 && age <= 120)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Age must be between 1 and 120"));
                    },
                  },
                ]}
              >
                <Input type="number" placeholder="e.g. 30" />
              </Form.Item>

              {/* --- Email --- */}
              <Form.Item
                name={["formFields", personKey, "email"]}
                label="Email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="e.g. john@example.com" />
              </Form.Item>
            </div>
          );
        })}

        {/* ====================== */}
        {/* ===Submit Button=== */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            disabled={selectedPeople.length === 0}
            size="large"
          >
            Submit
          </Button>
        </Form.Item>
      </Spin>
    </Form>
  );
};

export default PeopleConfigForm;
